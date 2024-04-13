from string import punctuation
import nltk
from nltk.tokenize import word_tokenize
import numpy as np
from sklearn.cluster import KMeans


import spacy

from python.lib.m_cluster import find_best_cluster, index_representative_points

nlp = spacy.load("en_core_web_lg")

import torch


import torch.nn as nn
#import torch.nn.functional as F
import torchaudio

def getSummaryTags(tags_list) : 
        words = word_tokenize(' '.join(tags_list))
        nouns_and_verbs = []
        lemmas = []
        for n in words:
                for token in nlp(n):
                        if token.pos_ == 'NOUN' or token.pos_ == 'VERB':
                                #print(f'{token.text:{8}} {token.pos_:{6}} {token.tag_:{6}} {token.dep_:{6}} {spacy.explain(token.pos_):{20}} {spacy.explain(token.tag_)}')
                                if (token.lemma_ not in lemmas) :
                                        lemmas.append(token.lemma_)
                                        nouns_and_verbs.append(token.vector)

        if(len(nouns_and_verbs) == 0):
                return []
        
        predicted_labels , n_clusters ,centroids = find_best_cluster ( nouns_and_verbs ,2,10,1)
        print(len(centroids) )
        nouns_and_verbs = np.array(nouns_and_verbs)
        most_rpz_idx = index_representative_points(nouns_and_verbs,centroids  ,  predicted_labels , n_clusters ) 

        summary_tags = []

        for i in most_rpz_idx :
            summary_tags.append(lemmas [i])

        return summary_tags

def get_hotwords(text):
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN'] # 1
    doc = nlp(text.lower()) # 2
    for token in doc:
        # 3
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        # 4
        if(token.pos_ in pos_tag):
            result.append(token.text)
                
    return result # 5