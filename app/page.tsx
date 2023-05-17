import ChessBoard from "@/components/board/ChessBoard";
import { ChessBoardProvider } from "@/components/board/context";
import FlexBreak from "@/components/FlexBreak";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-wrap">
      <h1 className="my-8 font-bold text-xl">Chess Repertoire Builder</h1>
      <FlexBreak />
      <ChessBoardProvider>
        <ChessBoard />
      </ChessBoardProvider>
    </main>
  );
}
