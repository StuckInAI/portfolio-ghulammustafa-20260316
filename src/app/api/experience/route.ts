import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Experience } from '@/entities/Experience';

export async function GET() {
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(Experience);
    const experiences = await repo.find({ order: { startDate: 'DESC' } });
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Error fetching experience:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experience' },
      { status: 500 }
    );
  }
}
