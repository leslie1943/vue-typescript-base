import { getUser } from '@/utils/call'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
  MutationAction
} from 'vuex-module-decorators'
import store from '../index'

export type PassengerUser = {
  name: string
  password: string
}

@Module({
  name: 'passenger',
  dynamic: true,
  namespaced: true,
  store
})
export default class PassengerStore extends VuexModule {
  // 💛 STATE: should be public for accessiable
  public loginInfo: PassengerUser[] = []

  // 💛 mutation-action State
  public username = ''
  public password = ''

  // 💛 Getter:
  get userNumber(): number {
    return this.loginInfo.length
  }

  // 💛 Mutation
  @Mutation
  USERINFO(user: PassengerUser): void {
    this.loginInfo.push(user)
  }

  // 💛 Action - 1: Action 后面的括号里添加 commit, the return result is he USERINFO's parameters
  @Action({ commit: 'USERINFO' })
  async addOne(): Promise<PassengerUser> {
    return { name: 'suzhen', password: 'father' }
  }

  // 💛 Action - 2: 直接 this.context.commit 调用
  @Action
  async addTwo(): Promise<void> {
    const user: PassengerUser = { name: 'moon', password: 'son' }
    this.context.commit('USERINFO', user)
  }

  // 💛 MutationAction
  @MutationAction({ mutate: ['username', 'password'] })
  async setCompany() {
    const data: any = await getUser()
    return { username: data.name, password: data.password }
  }
}

// 使用 getModule: 对类型安全的访问
export const PassengerStoreModule = getModule(PassengerStore)

/**
 * Hello, Everyone
 * My name is Leslie
 * Nice to meet you all, and happy to join this team.
 * In my past 3 years, I worked at a China company, the business customers are hospitals and suppliers

 * so tell you in advance, my English speaking and listening is not good enough.
 * please forgive me if I can not follow or understand you when we communicate in futrue days. thanks.

 * most of the time I foucs on front-end development
 * My Technology stack is Vue.js/React/NodeJs
 *
 * due to my some authorizations are still ongoing.

 * Currently I am reading the codes of web part of our project
 * read related technology documentations which be used in the project.
 * I will try my best to get familiar with the project as soon as possible.then start pargarmming.
 *
 * Appreciate If you can provide any advices and helps. Thanks
 */
