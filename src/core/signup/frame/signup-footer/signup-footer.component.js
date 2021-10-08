import React from 'react';
import { FooterField } from '../../../../lib/elements/footer';
import { useRouter } from 'next/router';
import { SIGNUP_LINK_ON_LOGIN } from '../../signup.constant';

export function SignupFooterComponent() {
  const router = useRouter();
  return (
    <FooterField
      titleTid="SIGNUP.SIGNUP_FORM.FOOTER.TITLE"
      linkTid="SIGNUP.SIGNUP_FORM.FOOTER.LINK"
      onClick={() => router.push(SIGNUP_LINK_ON_LOGIN)}
    />
  );
}
