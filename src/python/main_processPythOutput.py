



from lib_processPythOutput import *
import sys
from typing import Callable, Any, Dict, List 
import sys
import io
import argparse
import importlib
from functools import reduce
import os
from pathlib import Path

def main(prefixs : List[Prefix],func: Callable[[Dict [str,type] ,Dict[str,str] ] , None],  dct_typeOfParam : Dict [str,type] , **kwargs: Dict[str,str])-> None :
    
    stdout_backup = sys.stdout
    sys.stdout = io.StringIO()
    
    
    func(dct_typeOfParam , **kwargs) #a , b = [eval(i) for i in list(*args)] # func (*args: List[str]) -> Any :

    output = sys.stdout.getvalue()
    sys.stdout = stdout_backup

    if(prefixs):
        messages :List[str] = output.split("\n")[:-1]
        mss_all :Dict[str,str] = getMessages(messages,prefixs) # Dict[Prefix,str]
        print(str(mss_all)) 

if __name__ == "__main__":



    parser = argparse.ArgumentParser()
    parser.add_argument("--list_prefix", help="Liste d'éléments (delim := ',' )")
    parser.add_argument("--module_path", help="Chemin complet vers le  module contenant la fonction", required=True)
    parser.add_argument("--function", help="Nom de la fonction à appeler",  default="main")
    parser.add_argument("--list_kwargs", help="Liste des arguments de la fonction (format : name_param = value )")

    args = parser.parse_args()



    list_prefix = eval(args.list_prefix) 


    prefixs : List[Prefix] = [Prefix[item] for item in list_prefix if item in Prefix.__members__]
    
    list_kwargs = eval(args.list_kwargs)
    kwargs_dict: Dict[str,str]  =  reduce(lambda acc, item: {**acc, **item}, [dict([item.split("=")]) for item in list_kwargs]) if len(list_kwargs) else dict()



    #arg_list = [eval(i) for i in args.list_args ]

    
    try:

        try:
            module_folderPath = os.path.dirname(args.module_path)
            module_name = Path(args.module_path).stem
            debugMessage_embedding(module_folderPath)
            #print("Folder path " +r'{}'.format(module_folderPath))
            sys.path.append(module_folderPath)
            module = importlib.import_module(module_name)
            try:
                func = getattr(module, args.function)
            except AttributeError:
                raise Exception(f"Function: {args.function} not found in module: {args.module}")
            try:
                get_dctTypeOfParam: Callable[[], Dict[str, type]] = getattr(module, "get_typeOfParam")
            except AttributeError:
                raise Exception(f"get_typeOfParam function not found in module: {args.module}")
            
        except ImportError:
            raise Exception(f"Failed to import module: {module_name} from folder_path : {module_folderPath}")

        try:

            dct_typeOfParam = get_dctTypeOfParam()
        except Exception as e:
            raise Exception(f" get_typeOfPara :{str(e)}")
    except Exception as e:
        errMessage_embedding("Erreur Main Python: \n " + str(e))
        exit(1)

    f = open("decoFale4.txt", "w")
    f.write(str(kwargs_dict))
    f.close()

        
    main(prefixs ,func , dct_typeOfParam , **kwargs_dict) #arg_list
    