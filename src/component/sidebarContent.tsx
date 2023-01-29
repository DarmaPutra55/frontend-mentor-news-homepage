import { SidebarContentProps } from "../interface/interface";

export default function SidebarContent({
  title,
  content,
}: SidebarContentProps) {
  return (
    <section className="sidebar-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  );
}
