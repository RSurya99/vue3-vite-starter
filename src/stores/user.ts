import { defineStore } from 'pinia'
import ApiService from '@/services/ApiService'

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
  addres: Address
  phone: string
  website: string
  company: Company
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    getAllUser() {
      return ApiService.apiGetAllUsers()
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => {
          throw error
        })
    },
  },
})
