import Users from "@/container/Dashboard/Users";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export default function DashboardHome() {
  return <Users/>;
}
