import { toast } from "react-toastify"


const notify_error = (notify, id) =>{
    toast.error(notify, {toastId: id})
}

export default notify_error