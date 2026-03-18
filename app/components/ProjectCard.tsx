import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  onDetailClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  onDetailClick,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-600 text-sm mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            在线体验
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="mr-1 h-4 w-4" />
            GitHub
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-zinc-900 hover:bg-zinc-800"
            onClick={onDetailClick}
          >
            查看详情
          </Button>
        </div>
      </div>
    </div>
  );
}
