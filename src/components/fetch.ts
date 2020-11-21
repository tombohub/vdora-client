import axios from "axios";

function get(apiBase: string, apiPoint: string) {
    axios.get(apiBase+apiPoint,{
        withCredentials: true
    }).then(res => (res)).catch(err => {
        console.error(err)
        return err
    })
}