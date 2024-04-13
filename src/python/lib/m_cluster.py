
import pandas as pd  
import matplotlib.pyplot as plt
import numpy as np 


from sklearn.cluster import KMeans  #For applying KMeans
from sklearn.metrics import silhouette_score , calinski_harabasz_score , davies_bouldin_score  ,pairwise_distances_argmin


def mergeCategories_retInterval(n_clusters, predicted_kmeans, heatMarker_flt,max=90000):
        print("MERGE CATE ")
        print( n_clusters , predicted_kmeans , heatMarker_flt)

        arr_interval = [[] for i in range(n_clusters)]
        
        for i,e in enumerate(predicted_kmeans):
            arr_interval[e].append([heatMarker_flt [i][0],heatMarker_flt [i][1]])
        arr_interval.sort(key=lambda x: x[0])

        weights = []
        intervals = []
        for e in arr_interval:
            for i in range(len(e)):
                elm = e[i][0]
                if(i == 0):
                    beg = [elm,elm]
                    weight = e[i][1]
                else:
                    if(elm < beg[0]):
                        beg[0]=elm

                    if elm > beg[1]:
                        if(elm - beg[0] > max):
                            intervals.append([beg[0],beg[1]] )
                            weights.append(weight)
                            beg[0] =  beg[1] =elm
                            weight = e[i][1]
                        else:
                            print("icic")
                            beg[1] = elm
                            weight += e[i][1]
            intervals.append([beg[0],beg[1]] )
            weights.append(weight)
              
                
        '''
            beg = arr_interval[e]
            if(elm < beg[0]):
                    beg[0]=elm

            if elm > beg[1]:
                if(elm - beg[0] > max):
                        arr_interval[e].append([beg[0],beg[1]] )
                        weights[e].append(weights[e])
                        beg[0] =  beg[1] =elm
                        weights[e] = 0
                else:
                        beg[1] = elm
                        weights[e] +=heatMarker_flt [i][1]
        '''
                        
                
                
            
        return  intervals , weights

def getIdxNotSignifiantWeight(arr_interval,weights):
 
        idx_filter = []

        for i in range(len(weights)) :
            lgth = (arr_interval[i][1] -arr_interval[i][0]) * pow(10,-4)
            weights[i] = weights[i] / lgth if lgth != 0 else weights[i]
            if(weights[i] < 0.5 ):
                idx_filter.append(i) 
        return idx_filter

def filterAndSortArr( arr_interval,weights,idx_filter=[]):
        arr_weights = np.array([weights[i] for i in range(len(weights)) if i not in idx_filter])
        arr_e = np.array([arr_interval[i] for i in range(len(arr_interval)) if i not in idx_filter])


        idx_sort = [i[0] for i in sorted(enumerate(arr_e ), key=lambda x:x[1][0])]
        arr_e_sort = np.array(arr_e)[idx_sort]
        weights_sort = np.array(arr_weights)[idx_sort]

        return arr_e_sort,weights_sort



def index_representative_points(X,centroids ,  predicted_labels , n_cluster ):
    ret = []
    for k in range( n_cluster):
        mask = (predicted_labels == k).nonzero()[0]
        centroid = centroids[k]
        i0 = mask[pairwise_distances_argmin(centroid[None, :], X[mask])[0]]
        ret.append(i0)
    return np.array(ret)


def find_best_cluster (X , k_min , k_max , seed_random ):
    if(not(bool(X))):
        return [],0,[]
    
    
    fitted_kmeans = {}
    labels_kmeans = {}
    df_scores = []
    centroids= {}

    l_x = len(X)
    k_max = k_max if l_x > k_max else l_x 
    
    print("KK",k_min,k_max)

    for n_clusters in range(k_min,k_max):
        
        #Perform clustering.
        kmeans = KMeans(n_clusters=n_clusters,
                        random_state=seed_random,
                        )
        labels_clusters = kmeans.fit_predict(X)
        
        #Insert fitted model and calculated cluster labels in dictionaries,
        #for further reference.
        fitted_kmeans[n_clusters] = kmeans
        labels_kmeans[n_clusters] = labels_clusters
        centroids[n_clusters]  = kmeans.cluster_centers_ 
    
        #Calculate various scores, and save them for further reference.
        silhouette = silhouette_score(X, labels_clusters)
        ch = calinski_harabasz_score(X, labels_clusters)
        db = davies_bouldin_score(X, labels_clusters)
        tmp_scores = {"n_clusters": n_clusters,
                      "silhouette_score": silhouette,
                      "calinski_harabasz_score": ch,
                      "davies_bouldin_score": -db,
                      }
        print('tmp_scores',tmp_scores)
        df_scores.append(tmp_scores)

    #Create a DataFrame of clustering scores, using `n_clusters` as index, for easier plotting.
    
    df_scores = pd.DataFrame(df_scores)
    print("LLLLLLL")
    display(df_scores)
    df_scores.set_index("n_clusters", inplace=True)

  

    df_ = df_scores.sort_values(by=['silhouette_score','calinski_harabasz_score','davies_bouldin_score'],ascending=False)
    display(df_)

    predicted_labels = labels_kmeans[df_.index[0]]
    predicted_centroids = centroids[df_.index[0]]
    nb_cluster = df_.index[0]
    return predicted_labels ,    nb_cluster,predicted_centroids 

def filterMoreThanMean(data, fields ,x_field,y_field,z_field, mean):
    res=[]
    m=0
    l = len(data)
    for i in range(l) :
        d1=data[i]
        for field in fields : 
            d1=d1[field]
        m+=d1[z_field]
        if d1[y_field] > mean :
            res.append([d1[x_field],d1[y_field]])
            
    
    return res , m/l