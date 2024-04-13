
import argparse
import subprocess
from typing import Any ,Dict ,List
from lib_processPythOutput import *
from convert import * 

def get_typeOfParam() -> Dict [str,type] : 
    return { "query_text" :str , "to_language" :str , "translator" :str , "from_language" :str }

def main( typeOfParam :Dict [str,type] , **kwargs: Dict[str,str]  ) -> None :

    m_dict :Dict[str,Any ] = convert_dict(kwargs,typeOfParam) 

    # Vérifier si le package translators est installé ou le mettre à jour
    try:
        import translators as ts
    except ImportError:
        print("Le package translators n'est pas installé. Installation en cours...")
        subprocess.check_call(['pip', 'install', '--upgrade', 'translators'],shell=True)
        import translators as ts

    # Effectuer les tests de pré-accélération et de vitesse
    try :
        _ = ts.preaccelerate_and_speedtest()
    except Exception as e:
        print("Erreur Main Translate" +str(e))
    
    translation = ts.translate_text(**m_dict)

    print(resMessage_embedding(translation)) 

'''
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--q_text", help="Texte à traduire", type=str)
    parser.add_argument("--translator", help="Nom du traducteur (optionnel)")
    parser.add_argument("--from_language", help="Langue source (optionnel)")
    parser.add_argument("--to_language", help="Langue de destination", required=True)
    args = parser.parse_args()

    main(q_text= args.q_text , to_language=args.to_language , translator=args.translator, from_language=args.from_language)
    '''