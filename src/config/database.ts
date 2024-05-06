
import {_getMongoDBClusterKOBSuffix, _getMongoDBClusterKOBUrl}  from './envVar.js';

import { IClusterMetaMongoDB } from '@/../shared/m_database.js';


const json_clusterKOB : IClusterMetaMongoDB = {
    id:"0",
    url:_getMongoDBClusterKOBUrl(),
    admin:"LonyIl",
    options:{suffix:_getMongoDBClusterKOBSuffix()},
    name:"ClusterKOB"
}

export const getJsonClusterKOB = () => json_clusterKOB