import request from '@/utils/request'

export function tianqi(query) {
    return request ({
        url:'https://www.tianqiapi.com/api/',
        method:'GET',
        data:query
    })
}