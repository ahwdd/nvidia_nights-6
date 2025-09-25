"use client";

import { useTranslations } from "next-intl";

function getCategory(t, key) {
  const entrySubmissionObj = t(`${key}.entry_submission`, { returnObjects: true, defaultValue: {} });
  const entryRequirementsObj = t(`${key}.entry_requirements`, { returnObjects: true, defaultValue: {} });
  const rawDescription = t(`${key}.description`, { returnObjects: true, defaultValue: [] });
  const rawConditions = t(`${key}.conditions`, { returnObjects: true, defaultValue: [] });

  const description = Array.isArray(rawDescription) ? rawDescription : [rawDescription];
  const conditions = Array.isArray(rawConditions) ? rawConditions : [rawConditions];

  return {
    title: t(`${key}.title`, { defaultValue: "" }),
    description,
    conditions,
    entry_submission: {
      instruction: entrySubmissionObj.instruction || "",
      screenshot: entrySubmissionObj.screenshot || "",
      filename: entrySubmissionObj.filename || "",
      zip_instruction: entrySubmissionObj.zip_instruction || ""
    },
    winner_selection: t(`${key}.winner_selection`, { defaultValue: "" }),
    entry_requirements: {
      instruction: entryRequirementsObj.instruction || "",
      submission: entryRequirementsObj.submission || "",
      filename: entryRequirementsObj.filename || "",
      zip_instruction: entryRequirementsObj.zip_instruction || ""
    },
    general_terms: t(`${key}.general_terms`, { defaultValue: "" })
  };
}

// Header component
function TermsHeader({ t }) {
  return (
    <header>
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <h3 className="text-2xl font-semibold">{t("terms_conditions")}</h3>
    </header>
  );
}

function GeneralSection({ t }) {
  const importantNotes = t("important_notes", { returnObjects: true, defaultValue: [] });
  const eventDetails = t("event_details", { returnObjects: true, defaultValue: [] });
  const prohibitedContent = t("entry_submission.prohibited_content", { returnObjects: true, defaultValue: [] });
  const prizesConditions = t("prizes.conditions", { returnObjects: true, defaultValue: [] });

  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-medium">{t("general_terms")}</h3>
        <h4 className="text-lg font-semibold mt-4">{t("important_notes_title")}</h4>
        <ul className="list-disc ml-6 mt-2">
          {Array.isArray(importantNotes)
            ? importantNotes.map((note, index) => <li key={index}>{note}</li>)
            : <li>{importantNotes}</li>}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-medium">{t("eligibility_title")}</h3>
        <p className="mt-2">{t("eligibility")}</p>
      </section>

      <section>
        <h3 className="text-xl font-medium">{t("event_details_title")}</h3>
        <ul className="list-disc ml-6 mt-2">
          {Array.isArray(eventDetails)
            ? eventDetails.map((detail, index) => <li key={index}>{detail}</li>)
            : <li>{eventDetails}</li>}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-medium">{t("entry_submission_title")}</h3>
        <p className="mt-2">{t("entry_submission.multiple_entries")}</p>
        <p className="mt-2">{t("entry_submission.deadline")}</p>
        <p className="mt-2">{t("entry_submission.content_restrictions")}</p>
        <ul className="list-disc ml-6 mt-2">
          {Array.isArray(prohibitedContent)
            ? prohibitedContent.map((item, index) => <li key={index}>{item}</li>)
            : <li>{prohibitedContent}</li>}
        </ul>
        <p className="mt-2">{t("entry_submission.disqualification")}</p>
        <p className="mt-2">{t("entry_submission.usage_rights")}</p>
      </section>

      <section>
        <h3 className="text-xl font-medium">{t("prizes_title")}</h3>
        <p className="mt-2">{t("prizes.description")}</p>
        <ul className="list-disc ml-6 mt-2">
          {Array.isArray(prizesConditions)
            ? prizesConditions.map((item, index) => <li key={index}>{item}</li>)
            : <li>{prizesConditions}</li>}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-medium">{t("general_liability_title")}</h3>
        <p className="mt-2">{t("general_liability")}</p>
      </section>
    </div>
  )
}

function CategorySection({ data }) {
  return (
    <div className="border p-4 rounded-md my-4">
      <h3 className="text-xl font-bold">{data.title}</h3>
      {data.description && (
        <>
          {Array.isArray(data.description) ? (
            <ul className="list-disc ml-6 mt-2">
              {data.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2">{data.description}</p>
          )}
        </>
      )}
      {data.conditions && data.conditions.length > 0 && (
        <>
          <h4 className="mt-4 font-semibold">Conditions:</h4>
          {Array.isArray(data.conditions) ? (
            <ul className="list-disc ml-6 mt-2">
              {data.conditions.map((cond, index) => (
                <li key={index}>{cond}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2">{data.conditions}</p>
          )}
        </>
      )}
      {data.entry_submission && data.entry_submission.instruction && (
        <>
          <h4 className="mt-4 font-semibold">Entry Submission:</h4>
          <p className="mt-2">{data.entry_submission.instruction}</p>
          <p className="mt-2">{data.entry_submission.screenshot}</p>
          <p className="mt-2">{data.entry_submission.filename}</p>
          <p className="mt-2">{data.entry_submission.zip_instruction}</p>
        </>
      )}
      {data.winner_selection && data.winner_selection.trim() && (
        <p className="mt-2">
          <strong>Winner Selection:</strong> {data.winner_selection}
        </p>
      )}
      {data.entry_requirements && data.entry_requirements.instruction && (
        <>
          <h4 className="mt-4 font-semibold">Entry Requirements:</h4>
          <p className="mt-2">{data.entry_requirements.instruction}</p>
          <p className="mt-2">{data.entry_requirements.submission}</p>
          <p className="mt-2">{data.entry_requirements.filename}</p>
          <p className="mt-2">{data.entry_requirements.zip_instruction}</p>
        </>
      )}
      {data.general_terms && (
        <p className="mt-2">
          <strong>General Terms:</strong> {data.general_terms}
        </p>
      )}
    </div>
  );
}

function CategoriesSection({ t }) {
  const digitalArt = getCategory(t, "categories.digital_art_canvas");
  const videography = getCategory(t, "categories.videography");
  const fashion = getCategory(t, "categories.fashion");
  const architecture = getCategory(t, "categories.architecture");
  const cgi = getCategory(t, "categories.cgi");
  const gameDev = getCategory(t, "categories.game_dev");

  return (
    <section>
      <h3 className="text-xl font-medium">{t("categories_title")}</h3>
      <div className="space-y-4">
        <CategorySection data={digitalArt} />
        <CategorySection data={videography} />
        <CategorySection data={fashion} />
        <CategorySection data={architecture} />
        <CategorySection data={cgi} />
        <CategorySection data={gameDev} />
      </div>
    </section>
  );
}

export default function TermsContent() {
  const t = useTranslations("terms");

  return (
    <div className="my-10 space-y-8">
      <TermsHeader t={t} />
      <GeneralSection t={t} />
      <CategoriesSection t={t} />
    </div>
  );
}
