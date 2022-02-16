import { axiosService } from './'

export const GetItems = async() => {
    try {
        const res = await axiosService.get('/posts')
        return res.data
    } catch (error) {
        throw error
    }
}