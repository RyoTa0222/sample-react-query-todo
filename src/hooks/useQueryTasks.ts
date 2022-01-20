import { useQuery } from 'react-query'
import axios from 'axios'
import { Task } from '../types/types'

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `${process.env.REACT_APP_REST_URL}/tasks/`
    )
    return data
  }
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    staleTime: 0,
    // ページにフォーカスされたときに再取得
    refetchOnWindowFocus: true,
    // ページがアンマウントされた後に一定時間経過後キャッシュを消す
    //cacheTime: 5000,
    // 定期的にデータを取りに行く
    //refetchInterval: 5000,
  })
}
