import InvitationTemplate from "@/components/InvitationTemplate";
import { weddingConfig } from "@/config/weddingConfigMZ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: weddingConfig.social.title,
  description: weddingConfig.social.description,
  openGraph: {
    title: weddingConfig.social.title,
    description: weddingConfig.social.description,
    images: weddingConfig.social.images,
  },
};

export default function MZPage() {
  return <InvitationTemplate config={weddingConfig} />;
}
