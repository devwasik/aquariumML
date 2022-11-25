import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
import DashboardLayout from "components/layouts/dashboard/DashboardLayout";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (!req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function Home({ user }) {
  console.log(user)
  return (
    <DashboardLayout user={user}>
      <Row>
        <p
          style={{
            fontSize: "1em",
            display: "flex",
          }}
        >
       Days until next water change
    
        </p>
        <p>Reminders</p>
      </Row>
    </DashboardLayout>
  );
}
