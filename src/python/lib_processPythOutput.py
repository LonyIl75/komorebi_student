import re
from enum import Enum
from typing import Callable
from typing import List
from typing import Dict 

# print_debug.ts , lines :[10 ; 20 ]

message_sep : str = "|"
feature_sep : str = ":"

class Prefix(Enum):
    debug = "debug"
    err = "err"
    result = "result"

debug_message_prefix : Prefix = Prefix.debug
err_message_prefix : Prefix =  Prefix.err
res_message_prefix : Prefix =  Prefix.result

def prefix_embedding(prefix : Prefix, message : str) -> str:
    return message_sep.join([prefix.value ,message])

def feature_embedding(feature_name : str, feature_value : str) -> str:
    return feature_sep.join([feature_name,feature_value])



def debugMessage_embedding(message : str ) -> str:
    return  prefix_embedding(debug_message_prefix,message)



def errMessage_embedding(message : str) -> str:
    return  prefix_embedding(err_message_prefix,message)


def feature_debug_embedding(feature_name : str, feature_value : str) -> str:
    return debugMessage_embedding(feature_embedding(feature_name,feature_value))

def feature_err_embedding(feature_name : str, feature_value : str) -> str:
    return errMessage_embedding(feature_embedding(feature_name,feature_value))


def resMessage_embedding(message : str) -> str:
    return prefix_embedding(res_message_prefix,message)




def filter_messageByPrefix(messages :List[str] , prefix : Prefix , funct :Callable[[str], str] =None ) -> List[str] :
    res = list(filter(lambda msg: msg.startswith(prefix.value), messages))
    if(funct is None):
        return res
    else:
        return list(map(funct,res))


def filter_messageByFeature(messages :List[str] , feature_name : str , funct :Callable[[str], str] =None ) -> List[str] :
    res = list(filter(lambda msg: msg.startswith(feature_name), messages))
    if(funct is None):
        return res
    else:
        return list(map(funct,res))
    

def filterAndRemovePrefix(messages :List[str] , prefix : Prefix ) -> List[str] :
    return list(filter(lambda msg: len(msg) > 0,filter_messageByPrefix(messages,prefix,lambda msg: msg.split(prefix.value)[1][len(message_sep):] if len(msg.split(prefix.value)) == 2 else '')))

def filterAndRemoveFeature(messages :List[str] , feature_name : str ) -> List[str] :
    return list(filter(lambda msg: len(msg) > 0,filter_messageByFeature(messages,feature_name,lambda msg: msg.split(feature_name)[1][len(feature_sep):] if len(msg.split(feature_name)) == 2 else '')))
    

def resMessage_total_embedding (field_name :str , field_value : str) -> str:
    return resMessage_embedding(feature_embedding(field_name,field_value))


def filterAndRemoveResMessage(messages :List[str] ) -> List[str] :
    return filterAndRemovePrefix(messages,res_message_prefix)

def filterAndRemoveDebugMessage(messages :List[str] ) -> List[str] :
    return filterAndRemovePrefix(messages,debug_message_prefix)

def filterAndRemoveErrMessage(messages :List[str] ) -> List[str] :
    return filterAndRemovePrefix(messages,err_message_prefix)


def reverse_embedding(message : str, message_prefix : Prefix ) -> Dict[str,str]:
    field_name , str_value  = message.split(message_prefix)[:2] 
    return {field_name : str_value}

def reverseResMessage_embedding(message : str) -> Dict[str,str]:
    return reverse_embedding(message,res_message_prefix)


def getAllResult(messages:List[str] ) -> Dict[str,str] :
    result : Dict[str,str] = {}
    for message in filterAndRemoveResMessage(messages):
            val_dict = reverseResMessage_embedding(message)
            result.update(val_dict)
    return result

def getDebugMessages(messages:List[str] ) -> List[str] :
    return filterAndRemoveDebugMessage( messages)

def getErrMessages(messages:List[str] ) -> List[str] :
    return filterAndRemoveErrMessage( messages)


def getMessages(messages:List[str], prefixs: List[Prefix] ) -> Dict[str,List[str]] : #Dict[Prefix,List[str]]  : 
    result : Dict[str,List[str]] = {} #Dict[Prefix,List[str]] = {}
    for prefix in prefixs:
        result[prefix.value] = filterAndRemovePrefix(messages,prefix)
    return result