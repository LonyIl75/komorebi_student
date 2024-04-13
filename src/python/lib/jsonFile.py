

import json


def getSubPartJson(content_file,prop_to_extract   ) :
    meta_obj_json = dict.fromkeys(prop_to_extract)
    for prop in prop_to_extract :
        meta_obj_json[prop] = content_file[prop] if( prop in content_file) else []
    return meta_obj_json


def writeData(json_object ,filename,open_type =None) :
    str_json_object = json.dumps(json_object, indent=4)
    if(open_type == None):
        open_type = 'a'
    with open(filename, open_type, encoding='utf-8') as outfile:
        outfile.write(str_json_object)
        
    return filename 
