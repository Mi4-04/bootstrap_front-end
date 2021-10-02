import { SignupContainer } from './signup.container';
import {
  AuthLayout,
  PageLayout,
  ContentLayout,
  SectionLayout,
} from '../../lib/elements/layout';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SectionLayout>
            <SignupContainer />
          </SectionLayout>
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
