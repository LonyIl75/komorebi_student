
from typing import Dict


def convert_dict(data_dict:Dict [str,str], type_dict:Dict [str,type]):
    converted_dict = {}
    for key, value in data_dict.items():
        if key in type_dict:
            # Vérifier si le type est str pour éviter une conversion inutile
            if type_dict[key] == str:
                converted_dict[key] = value
            else:
                try:
                    converted_dict[key] = type_dict[key](value) if value else None
                except (ValueError, TypeError):
                    print("erreur" ,  type_dict[key] ,value )
                    converted_dict[key] = None  # Valeur par défaut si la conversion échoue
        else:
            converted_dict[key] = value  # Garder la valeur inchangée si le type n'est pas spécifié
    return converted_dict