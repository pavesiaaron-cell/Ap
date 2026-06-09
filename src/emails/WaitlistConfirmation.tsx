import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  name: string;
}

export default function WaitlistConfirmation({ name }: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Georgia, serif", backgroundColor: "#f8f7f4", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "560px", margin: "40px auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden" }}>
          <Section style={{ backgroundColor: "#0f172a", padding: "32px 40px" }}>
            <Text style={{ color: "#94a3b8", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
              Latitude Advisory
            </Text>
          </Section>
          <Section style={{ padding: "40px" }}>
            <Heading style={{ fontSize: "24px", color: "#0f172a", margin: "0 0 16px 0", fontWeight: 600 }}>
              You&apos;re on the list, {name}.
            </Heading>
            <Text style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              We&apos;re building something designed specifically for multi-unit franchise operators — strategic advisory that goes beyond the transaction.
            </Text>
            <Text style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              You&apos;ll be among the first to get access. In the meantime, if you want to talk through your portfolio now, book a free 20-minute call below.
            </Text>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/book`}
              style={{
                display: "inline-block",
                backgroundColor: "#0f172a",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Book a Free Discovery Call
            </Link>
            <Hr style={{ margin: "32px 0", borderColor: "#e2e8f0" }} />
            <Text style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
              Latitude Advisory · Strategic franchise consulting for multi-unit operators
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
