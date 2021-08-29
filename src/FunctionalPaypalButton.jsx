import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useFormikContext } from 'formik';

const buttonStyle = {
  color: 'gold',
  //fundingicons: false, //This style property doesnt exist in the paypal sdk
  label: 'checkout',
  shape: 'rect',
  size: 'responsive',
  tagline: false,
};

export const FunctionalPaypalButton = () => {
  const { values, submitForm, setSubmitting, isSubmitting, isValid } = useFormikContext(); 
  const isSubmittingRef = useRef(isSubmitting);

  const paypal = window['paypal'];
  const Button = paypal.Buttons.driver('react', { React, ReactDOM });

  const sleepUntilSubmitted = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (isSubmittingRef.current) { //This was a stale closure so i created a ref to store this value
      await sleep(100);
    }
  };

  const createOrderOrBillingAgreement = async () => {
    submitForm(); // submit will call api with form values and inject _paypal_token into the form values
    if (isValid) setSubmitting(true);
    await sleepUntilSubmitted();
    return values._paypal_token;
  };

  const onApprove = () => {
    // do something on success
    setSubmitting(false);
  };

  //Here i update the ref whenever the isSubmitting prop changes so I can access the latest value inside the sleepUntilSubmitted function
  useEffect(() => {
    isSubmittingRef.current = isSubmitting;
  }, [isSubmitting])

  return !paypal ? null : (
    <Button
      commit
      env="sandbox"
      createBillingAgreement={createOrderOrBillingAgreement}
      onApprove={onApprove}
      onCancel={() => setSubmitting(false)}
      onError={() => setSubmitting(false)}
      style={buttonStyle}
      disabled={isSubmitting}
    />
  );
};
