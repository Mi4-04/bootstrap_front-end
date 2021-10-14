import { setActivePath } from '../../lib/common/navigation';
import { LOGIN_ROUTE_PATH, LOGIN_REDIRECT_ON_LOGGED } from './login.constant';
import { authRedirectLogged } from '../../lib/common/auth';

export async function LoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  authRedirectLogged(ctx, LOGIN_REDIRECT_ON_LOGGED);
}
