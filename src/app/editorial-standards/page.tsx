import EditorialPolicyPage, { metadata as policyMetadata } from "../editorial-policy/page";
import { Metadata } from "next";
import { BUSINESS_INFO } from "@/config/business";

export const metadata: Metadata = {
  ...policyMetadata,
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/editorial-policy/`,
  },
};

export default EditorialPolicyPage;
