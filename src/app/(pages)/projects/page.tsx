import { getArticles } from '@/business/article/service/get-articles';
import { sortArticleByDate } from '@/business/article/service/sort-article-by-date';
import ProjectCard from '@/business/article/ui/project-card';

const ProjectsPage = async () => {
  const projectArticles = await getArticles();

  return (
    <div className="relative">
      <h1>Projects</h1>
      <div className="flex w-full flex-col">
        {sortArticleByDate(projectArticles).map((projectArticle) => (
          <ProjectCard
            key={projectArticle.slug}
            slug={projectArticle.slug}
            {...projectArticle.metadata}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
