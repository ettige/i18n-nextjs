import { useTranslation } from "@/i18n";
import Link from "next/link";

const Home = async ({
  params,
}: {
  params: { lang: string; };
}) => {

  const { t } = await useTranslation(params.lang)
  return <div>
    <h1>{t('title')}</h1>
    <Link href={`/`}>
      {t('to-second-page')}
    </Link>
  </div>;
}

export default Home;