import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import dynamic from "next/dynamic";
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

const DailyTask = ({ dailytask }) => {
  return (
    <div>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {dailytask.title}
          </CardTitle>
          <Plus className="h-6 w-6 text-muted-foreground cursor-pointer" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2 ">
            {dailytask.usedLanguages.map((item, idx) => (
              <Badge key={idx} variant="secondary" className="me-1">
                {item}
              </Badge>
            ))}
          </div>

          <div className="flex -space-x-4 rtl:space-x-reverse"></div>
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {dailytask.avatarImages.map((item, idx) => (
              <DynamicImage
                key={idx}
                className="border-2 border-white rounded-full dark:border-gray-800"
                src={item}
                alt=""
                width={40}
                height={40}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyTask;
