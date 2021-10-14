import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from './home.constant';

export async function HomeRouter(ctx) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
}
