import ProfileDetails from "@/components/profile/ProfileDetails";
import { mediumServices } from "@/services/medium.services";
import "./page.css";
import Medium from "@/components/medium/Medium";

export default async function Home() {
  const mediumData = await mediumServices.getMediumData();

  return (
    <div className="home-container">
      <ProfileDetails />
      <Medium mediumData={mediumData?.data} />
    </div>
  );
}
