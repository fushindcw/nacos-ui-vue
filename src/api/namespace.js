import {GET} from '@/utils/request'

export const listNamespace=()=>{
    return GET('/v1/console/namespaces');
}