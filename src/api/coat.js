import { axiosInstance } from "../utils/axios";

// 调用查询短袖接口
export const searchCoat = ( ) => {
    return axiosInstance.get('/getCoat')
} 
// 调用新增接口
export const addCoat = (params) => {
    return axiosInstance.post('/addCoat',params)
}

// 调用编辑接口
export const editCoat = (params) => {
    return axiosInstance.patch('/editCoat',params)
}
// 调用删除接口
export const deleteCoat = (params) => {
    return axiosInstance.post('/deleteCoat',params)
}