import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import data from "../../../../data.json";

export async function POST(req: NextRequest) {
	try {
		// Parse the incoming data
		const newData = await req.json();

		// Modify the existing data
		const updatedData = { ...data, ...newData };

		// Convert updated data to JSON string
		const jsonData = JSON.stringify(updatedData, null, 2);

		// Define the file path
		const filePath = path.join(process.cwd(), "data.json");

		// Write the updated data to the file
		await fs.writeFile(filePath, jsonData);

		return NextResponse.json(
			{ message: "Data successfully written to file" },
			{ status: 200 }
		);
	} catch (err) {
		return NextResponse.json({ error: "Error writing file" }, { status: 500 });
	}
}

export const GET = async (req: NextRequest) => {
	return NextResponse.json(data, { status: 200 });
};

export async function OPTIONS() {
	return new NextResponse(null, {
		status: 200,
		headers: {
			Allow: "POST, OPTIONS",
			"Content-Type": "application/json",
		},
	});
}
