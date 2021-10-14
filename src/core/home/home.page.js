import React from 'react';
//import { HomeComponent } from './home.component';
import { HomeContainer } from './home.container';
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
            <HomeContainer />
          </SectionLayout>
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
