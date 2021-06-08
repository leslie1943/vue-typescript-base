import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

export type StudentProp = {
  name: string
  class: string
}

@Module
export default class Students extends VuexModule {
  // 💛 STATE: should be public for accessiable
  public list: StudentProp[] = []

  // 💛 Mutation
  @Mutation
  UPDATELIST(user: StudentProp): void {
    this.list.push(user)
  }

  // 💛 Action - 1: Action 后面的括号里添加 commit, the return result is he USERINFO's parameters
  @Action({ commit: 'UPDATELIST' })
  async addStudent1(): Promise<StudentProp> {
    return { name: 'suzhen', class: '2-11' }
  }

  // 💛 Action - 2: 直接 this.context.commit 调用
  @Action
  async addStudent2(): Promise<void> {
    const student: StudentProp = { name: 'moon', class: '2-12' }
    this.context.commit('UPDATELIST', student)
  }
}
