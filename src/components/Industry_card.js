export function Industry_card({ name, count }) {

        return (
                <div className=" min-w-[250px] text-center m-4 py-3 hover:shadow-2xl border rounded-md snap-center">
                        <a href="">
                                <h1 className="font-bold">{name}</h1>
                                <p className="font-light text-sm">hiring count : {count}</p>
                        </a>
                </div>
        )
}