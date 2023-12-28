import { getArticles } from '@/business/article/service/get-articles';
import { sortArticleByDate } from '@/business/article/service/sort-article-by-date';
import ProjectCard from '@/business/article/ui/project-card';

const ProjectsPage = async () => {
  const projectArticles = await getArticles();

  return (
    <div className="relative -left-4 w-[calc(100%+2rem)]">
      <h1 className="px-4">Projects</h1>
      <div className="flex w-full flex-col space-y-12">
        {sortArticleByDate(projectArticles).map((projectArticle, index) => (
          <ProjectCard
            key={projectArticle.slug}
            index={index}
            slug={projectArticle.slug}
            {...projectArticle.metadata}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
