import React from 'react';
import { HomeComponent } from './home.component';
import {
  AuthLayout,
  PageLayout,
  ContentLayout,
  SectionLayout,
} from '../../lib/elements/layout';

export function HomePage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SectionLayout>
            <HomeComponent />
          </SectionLayout>
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
