import { AxiosResponse } from 'axios';
import { action, computed, makeAutoObservable, observable, reaction, runInAction } from 'mobx';
import { LoginDto } from '../../../backend/src/modules/auth/controllers/dto';
import { User } from '../../../backend/src/modules/users/entities/user.entity';
import { api } from '../commons/api';

class AuthStore {
  @observable
  isLoading: boolean = true;

  @observable
  public user?: User;

  @computed
  get isLoggedIn() {
    return !!this.user;
  }

  constructor() {
    makeAutoObservable(this);
    this.getCurrentUser();
  }

  @action
  protected getCurrentUser = async () => {
    try {
      const { data }: AxiosResponse<User> = await api.get('/users/me');
      this.user = data;
    } catch(e) {
      this.user = undefined;
    } finally {
      this.isLoading = false;
    }
  };

  @action
  public login = async (loginData: LoginDto) => {
    const { data }: AxiosResponse<User> = await api.post('/auth/login', loginData);
    runInAction(() => this.user = data);
  };

  @action
  public logout = async () => {
    await api.post('/auth/logout');
    this.user = undefined;
  };
}

const authStore = new AuthStore();
export default authStore;