
import {_getMongoClusterKOBSuffix, _getMongoClusterKOBUrl}  from './envVar.js';

import { IClusterMetaMongo } from '@/../shared/m_database.js';


const json_clusterKOB : IClusterMetaMongo = {
    id:"0",
    url:_getMongoClusterKOBUrl(),
    admin:"LonyIl",
    options:{suffix:_getMongoClusterKOBSuffix()},
    name:"ClusterKOB"
}

export const getJsonClusterKOB = () => json_clusterKOB