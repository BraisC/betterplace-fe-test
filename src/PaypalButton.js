import React from "react";
import ReactDOM from "react-dom";
import { connect } from "formik";

const buttonStyle = {
  color: "gold",
 //fundingicons: false, //This style property doesnt exist in the paypal sdk
  label: "checkout",
  shape: "rect",
  size: "responsive",
  tagline: false,
};

class PaypalButton extends React.Component {
  createOrderOrBillingAgreement = async () => {
    this.props.formik.submitForm(); // submit will call api with form values and inject _paypal_token into the form values
    if (this.props.formik.isValid) this.props.formik.setSubmitting(true);
    await this.sleepUntilSubmitted();
    return this.props.formik.values._paypal_token;
  };

  sleepUntilSubmitted = async () => {
    const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
    while (this.props.formik.isSubmitting) {
      await sleep(100);
    }
  };

  onApprove = () => {
    // do something on success
    this.props.formik.setSubmitting(false);
  };

  render = () => {
    const paypal = window["paypal"];
    if (!paypal) return null;

    const Button = paypal.Buttons.driver("react", { React, ReactDOM });
    const { isSubmitting } = this.props.formik;

    return (
      <Button
        commit
        env="sandbox"
        createBillingAgreement={this.createOrderOrBillingAgreement}
        onApprove={this.onApprove}
        onCancel={() => this.props.formik.setSubmitting(false)}
        onError={() => this.props.formik.setSubmitting(false)}
        style={buttonStyle}
        disabled={isSubmitting}
      />
    );
  };
}

export default connect(PaypalButton);



