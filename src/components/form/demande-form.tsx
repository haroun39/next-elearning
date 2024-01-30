import { Icons } from "../icon";
import { Input } from "../ui/input";

export default function DemanderForm() {
  return (
    <form action="">
      <Input
        icon={<Icons.profile stroke="black" />}
        placeholder="Nom De Docteur"
        lable="le nom du professeur s'affiche ici :"
      />
      <Input
        icon={<Icons.book stroke="black" />}
        placeholder="Nom Du Matiére"
        lable="la matiére que vous atteint a etudier s'affiche ici :"
      />
      <Input
        icon={<Icons.call stroke="black" />}
        placeholder="+21600000000"
        lable="Veuillez entrer votre numero de telephone :"
      />
      <Input
        icon={<Icons.calculator stroke="black" />}
        placeholder="4"
        lable="Veuillez entrer le nombre de seance que vou voulez :"
      />
    </form>
  );
}
