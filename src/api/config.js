import {GET} from '@/utils/request'

export const listConfig=(configQuery)=>{
    return GET('/v1/cs/configs', configQuery);
}