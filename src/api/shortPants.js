import { axiosInstance } from "../utils/axios";

// 调用查询短袖接口
export const searchShortSleeve = ( ) => {
    return axiosInstance.get('/getShortSleeve')
} 
// 调用新增接口
export const addShortSleeve = (params) => {
    return axiosInstance.post('/addShortSleeve',params)
}

// 调用编辑接口
export const editShortSleeve = (params) => {
    return axiosInstance.patch('/editShortSleeve',params)
}
// 调用删除接口
export const deleteShortSleeve = (params) => {
    return axiosInstance.post('/deleteShortSleeve',params)
}