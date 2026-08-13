// Post images mapping - maps post slug to image path
const baseUrl = import.meta.env.BASE_URL;
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

function withBase(assetPath: string): string {
  const normalizedPath = assetPath.replace(/^\/+/, "");
  return `${normalizedBaseUrl}${normalizedPath}`;
}

export const postImages: Record<string, string> = {
  "web-performance-optimization-guide-2025": withBase("images/posts/craft-1141796_640.png"),
  "tech-giants-ai-investment-surge": withBase("images/posts/work-8660354_640.png"),
  "spacex-mars-mission-update": withBase("images/posts/logo-2724481_640.png"),
  "quantum-computing-milestone": withBase("images/posts/lcd-32872_640.png"),
  "market-analysis-template-2025": withBase("images/posts/call-3613071_640.png"),
  "major-cybersecurity-breakthrough": withBase("images/posts/headphones-1899759_640.png"),
  "business-template-strategic-planning-framework": withBase("images/posts/icons-6931458_640.png"),
  "strategic-business-planning-for-2025": withBase("images/posts/cloud-3331240_640.png"),
  "the-rise-of-ai-powered-development-tools-in-2025": withBase("images/posts/man-1459246_640.png"),
};

// Default image for posts without specific image
export const defaultPostImage = withBase("images/posts/craft-1141796_640.png");

