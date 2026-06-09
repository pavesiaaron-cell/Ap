import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const dbPath = `file:${path.resolve(process.cwd(), "dev.db")}`;
const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter } as ConstructorParameters<typeof PrismaClient>[0]);

const leads = [
  { name: "Marcus Rivera", email: "mrivera@sunbeltfranchise.com", phone: "602-555-0181", brand: "Subway", units: 8, status: "QUALIFIED", source: "linkedin", notes: "Interested in diversifying into fitness brands. Call scheduled for next week." },
  { name: "Sandra Kim", email: "skim@kimdininggroup.com", phone: "404-555-0234", brand: "Chick-fil-A", units: 3, status: "NEW", source: "csv_import", notes: null },
  { name: "Derek Ohayon", email: "dohayon@ohayon-retail.com", phone: "214-555-0099", brand: "Planet Fitness", units: 12, status: "CONTACTED", source: "cold_call", notes: "Thinking about exit in 2–3 years. Send case study on exit optimization." },
  { name: "Priya Nair", email: "pnair@nairventures.net", phone: "512-555-0312", brand: "Massage Envy", units: 5, status: "PROPOSAL_SENT", source: "referral", notes: "Proposal sent 2024-11-15. Waiting on decision from partner." },
  { name: "Tom Whitfield", email: "twhitfield@whit-qsr.com", phone: "615-555-0455", brand: "McDonald's", units: 6, status: "NEW", source: "linkedin", notes: null },
  { name: "Aisha Patel", email: "apatel@patelgroup.biz", phone: "972-555-0677", brand: "Anytime Fitness", units: 9, status: "CONTACTED", source: "cold_email", notes: "Looking at site selection support for Texas expansion." },
  { name: "James Kowalski", email: "jkowalski@kowalskiops.com", phone: "313-555-0821", brand: "Taco Bell", units: 14, status: "CLOSED_WON", source: "referral", notes: "Signed retainer. Portfolio review in progress." },
  { name: "Natalie Berg", email: "nberg@bergfranchise.com", phone: "720-555-0543", brand: "Great Clips", units: 4, status: "NEW", source: "csv_import", notes: null },
  { name: "Carlos Moreno", email: "cmoreno@morenogroup.io", phone: "786-555-0119", brand: "Subway", units: 7, status: "QUALIFIED", source: "cold_call", notes: "Wants to move out of QSR. Interested in evaluation of Orangetheory." },
  { name: "Rachel Schwartz", email: "rschwartz@rsfood.com", phone: "615-555-0888", brand: "Dunkin'", units: 11, status: "CONTACTED", source: "linkedin", notes: "Running 4 underperforming locations. Open to site swap analysis." },
  { name: "Kevin Tran", email: "ktran@tranholdings.com", phone: "469-555-0334", brand: "7-Eleven", units: 18, status: "NEW", source: "csv_import", notes: null },
  { name: "Monica Delgado", email: "mdelgado@delgado-franchise.com", phone: "210-555-0667", brand: "CycleBar", units: 3, status: "CLOSED_LOST", source: "cold_email", notes: "Went with competitor. Follow up Q3 next year." },
  { name: "Grant Haverford", email: "grant@haverfordops.com", phone: "503-555-0201", brand: "Jimmy John's", units: 6, status: "PROPOSAL_SENT", source: "referral", notes: "Two-site acquisition under review. Decision expected EOQ." },
  { name: "Tiffany Bassett", email: "tbassett@tbassett.net", phone: "704-555-0788", brand: "Snap Fitness", units: 2, status: "NEW", source: "linkedin", notes: null },
  { name: "David Osei", email: "dosei@oseifranchise.com", phone: "678-555-0443", brand: "Popeyes", units: 5, status: "CONTACTED", source: "cold_call", notes: "Interested in exit strategy. 18-month timeline." },
  { name: "Lisa Yamamoto", email: "lyamamoto@yamagroup.com", phone: "253-555-0924", brand: "Orangetheory", units: 8, status: "QUALIFIED", source: "referral", notes: "High-value prospect. Multi-state operator. Referred by James K." },
  { name: "Brian Costello", email: "bcostello@costelloqsr.com", phone: "216-555-0561", brand: "Arby's", units: 10, status: "NEW", source: "csv_import", notes: null },
  { name: "Janet Wu", email: "jwu@wuportfolio.com", phone: "626-555-0374", brand: "The UPS Store", units: 6, status: "CLOSED_WON", source: "cold_email", notes: "Signed project engagement. Site selection for CA market expansion." },
];

async function main() {
  console.log("Seeding leads...");
  await prisma.lead.deleteMany();
  await prisma.lead.createMany({ data: leads });
  console.log(`Seeded ${leads.length} leads.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
