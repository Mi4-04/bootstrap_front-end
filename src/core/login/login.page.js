import { LoginContainer } from './login.container';
import {
  AuthLayout,
  PageLayout,
  ContentLayout,
  SectionLayout,
} from '../../lib/elements/layout';

export function LoginPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SectionLayout>
            <LoginContainer />
          </SectionLayout>
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
