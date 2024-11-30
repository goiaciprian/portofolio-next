import { SnapSection } from "@/components/SnapSection.component";

export default function NotFound() {
    return (
        <SnapSection height="65vh" >
            <div className="flex flex-col w-{30%} items-center">
                <h1>Page not found</h1>
                <div className="relative p-{10px} w-full" >
                    {/*<Divider bg={'brand.300'} orientation="horizontal" width={'100%'} />*/}
                    <div className="bg-this_black absolute top-1/2 bottom-1/2">
                        <h1>
                            404
                        </h1>
                    </div>
                </div>
            </div>
        </SnapSection>
    )
}