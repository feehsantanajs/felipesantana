import { api } from "@/services/api"

export async function getGithubRepos(){
    try {
        const response = await api.get('/repos')
  
        if (response) {
          console.log(response.data)
        }
    } catch (err) {
  
    }
}