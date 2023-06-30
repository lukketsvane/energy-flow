import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { getAllDocs, getDocBySlug, Doc } from '@/lib/docs';
import { DocPage } from '@/components/DocPage';

type DocsProps = {
  selectedDoc: Doc;
  docs: Doc[];
};

export default function Docs({ selectedDoc, docs }: DocsProps) {
  return (
      <DocPage docs={docs} selectedDoc={selectedDoc} />
  );
}

export const getServerSideProps: GetServerSideProps<DocsProps> = async ({ params }: GetServerSidePropsContext) => {
  const slug = params?.slug as string[];
  const selectedDoc = await getDocBySlug(slug);
  const docs = await getAllDocs();
  return { props: { selectedDoc, docs } };
};